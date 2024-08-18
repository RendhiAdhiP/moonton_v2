<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'The Batman',
                'slug' => 'the-batman',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=8YjZU7pHylI',
                'thumbnail' => 'https://i.ytimg.com/vi/8YjZU7pHylI/maxresdefault.jpg',
                'rating' => 4.5,
                'is_featured' => false,
            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=sY1S34973zA',
                'tumbnail' => 'https://i.ytimg.com/vi/sY1S34973zA/maxresdefault.jpg',
                'rating' => 4.0,
                'is_featured' => false,
            ],
            [
                'name' => 'The Dark Knight',
                'slug' => 'the-dark-knight',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
                'tumbnail' => 'https://i.ytimg.com/vi/EXeTwQWrcwY/maxresdefault.jpg',
                'rating' => 5.0,
                'is_featured' => true,
            ],
            [
                'name' => 'The Matrix',
                'slug' => 'the-matrix',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=m8e-FF8MsqU',
                'tumbnail' => 'https://i.ytimg.com/vi/m8e-FF8MsqU/maxresdefault.jpg',
                'rating' => 3.5,    
                'is_featured' => false,    
            ],
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=6hB3S9bIaco',
                'tumbnail' => 'https://i.ytimg.com/vi/6hB3S9bIaco/maxresdefault.jpg',
                'rating' => 4.0,
                'is_featured' => false,
            ]
        ];

        Movie::insert($movies);
    }
}
