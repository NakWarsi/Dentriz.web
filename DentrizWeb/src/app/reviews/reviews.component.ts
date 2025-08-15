import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  constructor(private router: Router) {}

  reviewPlatforms = [
    {
      name: 'Google Reviews',
      icon: 'google',
      rating: 4.8,
      reviewCount: 127,
      component: 'google-reviews',
      url: 'https://www.google.com/search?q=DentRiz+Dental+reviews'
    },
    {
      name: 'Facebook Reviews',
      icon: 'facebook',
      rating: 4.9,
      reviewCount: 89,
      component: 'facebook-reviews',
      url: 'https://www.facebook.com/DentRizDental/reviews'
    },
    {
      name: 'Yelp Reviews',
      icon: 'yelp',
      rating: 4.7,
      reviewCount: 156,
      component: 'yelp-reviews',
      url: 'https://www.yelp.com/biz/dentriz-dental'
    },
    {
      name: 'Healthgrades',
      icon: 'healthgrades',
      rating: 4.8,
      reviewCount: 73,
      component: 'healthgrades-reviews',
      url: 'https://www.healthgrades.com/dentist/dr-riz-dental'
    },
    {
      name: 'Zocdoc',
      icon: 'zocdoc',
      rating: 4.9,
      reviewCount: 94,
      component: 'zocdoc-reviews',
      url: 'https://www.zocdoc.com/dentist/dr-riz-dental'
    },
    {
      name: 'Vitals',
      icon: 'vitals',
      rating: 4.7,
      reviewCount: 45,
      component: 'vitals-reviews',
      url: 'https://www.vitals.com/dentist/dr-riz-dental'
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

  viewReviews(platform: any) {
    // For Google and Facebook, provide option to view internally or externally
    if (platform.icon === 'google') {
      const choice = confirm('Would you like to view Google Reviews on our website? Click OK for internal view, Cancel for external Google page.');
      if (choice) {
        this.router.navigate(['/reviews/google']);
      } else {
        window.open(platform.url, '_blank');
      }
    } else if (platform.icon === 'facebook') {
      const choice = confirm('Would you like to view Facebook Reviews on our website? Click OK for internal view, Cancel for external Facebook page.');
      if (choice) {
        this.router.navigate(['/reviews/facebook']);
      } else {
        window.open(platform.url, '_blank');
      }
    } else if (platform.icon === 'yelp') {
      const choice = confirm('Would you like to view Yelp Reviews on our website? Click OK for internal view, Cancel for external Yelp page.');
      if (choice) {
        this.router.navigate(['/reviews/yelp']);
      } else {
        window.open(platform.url, '_blank');
      }
    } else if (platform.icon === 'healthgrades') {
      const choice = confirm('Would you like to view Healthgrades Reviews on our website? Click OK for internal view, Cancel for external Healthgrades page.');
      if (choice) {
        this.router.navigate(['/reviews/healthgrades']);
      } else {
        window.open(platform.url, '_blank');
      }
    } else if (platform.icon === 'zocdoc') {
      const choice = confirm('Would you like to view Zocdoc Reviews on our website? Click OK for internal view, Cancel for external Zocdoc page.');
      if (choice) {
        this.router.navigate(['/reviews/zocdoc']);
      } else {
        window.open(platform.url, '_blank');
      }
    } else if (platform.icon === 'vitals') {
      const choice = confirm('Would you like to view Vitals Reviews on our website? Click OK for internal view, Cancel for external Vitals page.');
      if (choice) {
        this.router.navigate(['/reviews/vitals']);
      } else {
        window.open(platform.url, '_blank');
      }
    } else {
      // For other platforms, open external links directly
      window.open(platform.url, '_blank');
    }
  }
}
