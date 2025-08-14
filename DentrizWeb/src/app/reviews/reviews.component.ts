import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  reviewPlatforms = [
    {
      name: 'Google Reviews',
      icon: 'google',
      rating: 4.8,
      reviewCount: 127,
      component: 'google-reviews'
    },
    {
      name: 'Facebook Reviews',
      icon: 'facebook',
      rating: 4.9,
      reviewCount: 89,
      component: 'facebook-reviews'
    },
    {
      name: 'Yelp Reviews',
      icon: 'yelp',
      rating: 4.7,
      reviewCount: 156,
      component: 'yelp-reviews'
    },
    {
      name: 'Healthgrades',
      icon: 'healthgrades',
      rating: 4.8,
      reviewCount: 73,
      component: 'healthgrades-reviews'
    },
    {
      name: 'Zocdoc',
      icon: 'zocdoc',
      rating: 4.9,
      reviewCount: 94,
      component: 'zocdoc-reviews'
    },
    {
      name: 'Vitals',
      icon: 'vitals',
      rating: 4.7,
      reviewCount: 45,
      component: 'vitals-reviews'
    }
  ];

  testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Dr. Riz and his team are absolutely amazing! They made my dental experience comfortable and pain-free. Highly recommend!',
      platform: 'Google',
      date: '2024-01-15'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Professional, caring, and excellent service. The staff is friendly and the facility is modern and clean.',
      platform: 'Facebook',
      date: '2024-01-10'
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'I was nervous about getting dental work done, but Dr. Riz put me at ease. The results exceeded my expectations!',
      platform: 'Yelp',
      date: '2024-01-08'
    },
    {
      name: 'David Thompson',
      rating: 5,
      text: 'Outstanding care and attention to detail. The entire team is knowledgeable and compassionate.',
      platform: 'Healthgrades',
      date: '2024-01-05'
    }
  ];
}
