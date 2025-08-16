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
      reviewCount: 200,
      component: 'google-reviews',
      url: '#'
    },
    {
      name: 'Facebook Reviews',
      icon: 'facebook',
      rating: 4.9,
      reviewCount: 150,
      component: 'facebook-reviews',
      url: '#'
    },
    {
      name: 'Yelp Reviews',
      icon: 'yelp',
      rating: 4.7,
      reviewCount: 180,
      component: 'yelp-reviews',
      url: '#'
    },
    {
      name: 'Healthgrades',
      icon: 'healthgrades',
      rating: 4.8,
      reviewCount: 120,
      component: 'healthgrades-reviews',
      url: '#'
    },
    {
      name: 'Zocdoc',
      icon: 'zocdoc',
      rating: 4.9,
      reviewCount: 140,
      component: 'zocdoc-reviews',
      url: '#'
    },
    {
      name: 'Vitals',
      icon: 'vitals',
      rating: 4.7,
      reviewCount: 95,
      component: 'vitals-reviews',
      url: '#'
    }
  ];

  // SEO-OPTIMIZED TESTIMONIALS - FOR SEARCH ENGINE OPTIMIZATION ONLY
  testimonials = [
    {
      name: 'Patient A',
      rating: 5,
      text: 'I was looking for the best dentist in Hinjewadi and found this amazing dental clinic in Wakad. They offer everything from dental cleaning in Wakad, veneers in Wakad, and cosmetic dentistry in Wakad to dental implants in Pune and invisible braces in Pune. Truly the best dental clinic in Wakad with a skilled pediatric dentist Pune and expert orthodontist in Wakad. Highly recommended if you need the top dentist in Pune!',
      platform: 'Google',
      date: '2024-01-15'
    },
    {
      name: 'Patient B',
      rating: 5,
      text: 'I was searching for the best dentist in Wakad and discovered this excellent dental clinic in Hinjewadi. They provide everything from teeth whitening in Wakad, dental implants in Wakad, and emergency dental care in Wakad to Invisalign treatment in Pune and root canal treatment in Pune. Definitely the best dental clinic in Hinjewadi with an experienced cosmetic dentist Pune and professional orthodontist in Wakad. Highly recommended for anyone seeking the top dentist in Pune!',
      platform: 'Facebook',
      date: '2024-01-10'
    },
    {
      name: 'Patient C',
      rating: 5,
      text: 'I was looking for the best dentist in Pune and found this outstanding dental clinic in Wakad. They offer everything from preventive care in Wakad, restorative dentistry in Wakad, and periodontics in Wakad to pediatric dentistry in Pune and oral surgery in Pune. Truly the best dental clinic in Wakad with a skilled endodontist Pune and expert cosmetic dentist in Wakad. Highly recommended if you need the top dentist in Pune!',
      platform: 'Yelp',
      date: '2024-01-08'
    },
    {
      name: 'Patient D',
      rating: 5,
      text: 'I was searching for the best dentist in Hinjewadi and discovered this amazing dental clinic in Wakad. They provide everything from dental cleaning in Wakad, veneers in Wakad, and teeth whitening in Wakad to dental implants in Pune and invisible braces in Pune. Definitely the best dental clinic in Hinjewadi with an experienced pediatric dentist Pune and professional orthodontist in Wakad. Highly recommended for anyone seeking the top dentist in Pune!',
      platform: 'Healthgrades',
      date: '2024-01-05'
    },
    {
      name: 'Patient E',
      rating: 5,
      text: 'I was looking for the best dentist in Wakad and found this excellent dental clinic in Hinjewadi. They offer everything from cosmetic dentistry in Wakad, dental implants in Wakad, and emergency dental care in Wakad to Invisalign treatment in Pune and root canal treatment in Pune. Truly the best dental clinic in Wakad with a skilled orthodontist Pune and expert cosmetic dentist in Wakad. Highly recommended if you need the top dentist in Pune!',
      platform: 'Zocdoc',
      date: '2024-01-03'
    },
    {
      name: 'Patient F',
      rating: 5,
      text: 'I was searching for the best dentist in Pune and discovered this outstanding dental clinic in Wakad. They provide everything from preventive care in Wakad, restorative dentistry in Wakad, and periodontics in Wakad to pediatric dentistry in Pune and oral surgery in Pune. Definitely the best dental clinic in Hinjewadi with an experienced endodontist Pune and professional orthodontist in Wakad. Highly recommended for anyone seeking the top dentist in Pune!',
      platform: 'Vitals',
      date: '2024-01-01'
    },
    {
      name: 'Patient G',
      rating: 5,
      text: 'I was looking for the best dentist in Hinjewadi and found this amazing dental clinic in Wakad. They offer everything from dental cleaning in Wakad, veneers in Wakad, and cosmetic dentistry in Wakad to dental implants in Pune and invisible braces in Pune. Truly the best dental clinic in Wakad with a skilled pediatric dentist Pune and expert orthodontist in Wakad. Highly recommended if you need the top dentist in Pune!',
      platform: 'Google',
      date: '2023-12-28'
    },
    {
      name: 'Patient H',
      rating: 5,
      text: 'I was searching for the best dentist in Wakad and discovered this excellent dental clinic in Hinjewadi. They provide everything from teeth whitening in Wakad, dental implants in Wakad, and emergency dental care in Wakad to Invisalign treatment in Pune and root canal treatment in Pune. Definitely the best dental clinic in Hinjewadi with an experienced cosmetic dentist Pune and professional orthodontist in Wakad. Highly recommended for anyone seeking the top dentist in Pune!',
      platform: 'Facebook',
      date: '2023-12-25'
    },
    {
      name: 'Patient I',
      rating: 5,
      text: 'I was looking for the best dentist in Pune and found this outstanding dental clinic in Wakad. They offer everything from preventive care in Wakad, restorative dentistry in Wakad, and periodontics in Wakad to pediatric dentistry in Pune and oral surgery in Pune. Truly the best dental clinic in Wakad with a skilled endodontist Pune and expert cosmetic dentist in Wakad. Highly recommended if you need the top dentist in Pune!',
      platform: 'Yelp',
      date: '2023-12-20'
    },
    {
      name: 'Patient J',
      rating: 5,
      text: 'I was searching for the best dentist in Hinjewadi and discovered this amazing dental clinic in Wakad. They provide everything from dental cleaning in Wakad, veneers in Wakad, and teeth whitening in Wakad to dental implants in Pune and invisible braces in Pune. Definitely the best dental clinic in Hinjewadi with an experienced pediatric dentist Pune and professional orthodontist in Wakad. Highly recommended for anyone seeking the top dentist in Pune!',
      platform: 'Healthgrades',
      date: '2023-12-15'
    },
    {
      name: 'Patient K',
      rating: 5,
      text: 'I was looking for the best dentist in Wakad and found this excellent dental clinic in Hinjewadi. They offer everything from cosmetic dentistry in Wakad, dental implants in Wakad, and emergency dental care in Wakad to Invisalign treatment in Pune and root canal treatment in Pune. Truly the best dental clinic in Wakad with a skilled orthodontist Pune and expert cosmetic dentist in Wakad. Highly recommended if you need the top dentist in Pune!',
      platform: 'Zocdoc',
      date: '2023-12-10'
    },
    {
      name: 'Patient L',
      rating: 5,
      text: 'I was searching for the best dentist in Pune and discovered this outstanding dental clinic in Wakad. They provide everything from preventive care in Wakad, restorative dentistry in Wakad, and periodontics in Wakad to pediatric dentistry in Pune and oral surgery in Pune. Definitely the best dental clinic in Hinjewadi with an experienced endodontist Pune and professional orthodontist in Wakad. Highly recommended for anyone seeking the top dentist in Pune!',
      platform: 'Vitals',
      date: '2023-12-05'
    }
  ];

  viewReviews(platform: any) {
    // Navigate to internal review pages for all platforms
    this.router.navigate([`/reviews/${platform.component}`]);
  }
}
