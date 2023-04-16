<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ArticleSingleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
      return [
        'id' => $this->id,
        'title' => $this->title,
        'teaser' => $this->teaser,
        'body' => $this->body,
        'author' => $this->author->name,
        'picture' => $this->picture ? Storage::url($this->picture) : null,
        'category_id' => [
          'name' => $this->category->name,
          'slug' => $this->category->slug
        ],
        'tags' => $this->tags->map(fn ($entry) => [
          'name' => $entry->name,
          'slug' => $entry->slug
        ])
      ];
    }
}
