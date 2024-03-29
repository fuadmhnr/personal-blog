<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleItemResource;
use App\Http\Resources\ArticleSingleResource;
use App\Models\Article;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public $tags;
    public $categories;

    public function __construct()
    {
      $this->middleware('auth')->except('show', 'index');
      $this->tags = Tag::select('id', 'name')->get();
      $this->categories = Category::select('id', 'name')->get();
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::query()
            ->select('title', 'slug', 'user_id', 'teaser', 'created_at', 'id')
            ->with(['tags' => fn($tag) => $tag->select('name', 'slug')])
            ->latest()
            ->fastPaginate();
        
            return inertia('Articles/Index', [
            'articles' => ArticleItemResource::collection($articles)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Articles/Create', [
          'tags' => $this->tags,
          'categories' => $this->categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      $picture = $request->file('picture');
      $article = $request->user()->articles()->create([
        'title' => $title = $request->title,
        'slug' => $slug = str($title)->slug(),
        'teaser' => $request->teaser,
        'category_id' => $request->category_id,
        'body' => $request->body,
        'picture' => $request->hasFile('picture') ? $picture->storeAs('articles/images', $slug . '.' . $picture->extension()) : null,
      ]);

      $article->tags()->attach($request->tags);

      return to_route('articles.show', $article);

    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
      return inertia('Articles/Show', [
          'article' => new ArticleSingleResource($article->load([
            'tags' => fn($query) => $query->select('name', 'slug'),
            'category' => fn($query) => $query->select('id', 'name', 'slug')
          ]))
      ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        //
    }
}
