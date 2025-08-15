import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-smile-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './smile-gallery.component.html',
  styleUrls: ['./smile-gallery.component.css']
})
export class SmileGalleryComponent {
  gallerySections = [
    { 
      id: 'before-after', 
      title: 'Before & After', 
      description: 'Witness the incredible transformations our patients have experienced', 
      imageCount: 12, 
      route: '/smile-gallery/before-after',
      color: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)'
    },
    { 
      id: 'our-work', 
      title: 'Our Work', 
      description: 'A showcase of our finest dental work and craftsmanship', 
      imageCount: 15, 
      route: '/smile-gallery/our-work',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    { 
      id: 'smile-transformations', 
      title: 'Smile Transformations', 
      description: 'Complete smile makeovers that have changed lives', 
      imageCount: 8, 
      route: '/smile-gallery/smile-transformations',
      color: 'linear-gradient(135deg, #2ed573 0%, #1e90ff 100%)'
    },
    { 
      id: 'smile-showcase', 
      title: 'Our Smile Showcase', 
      description: 'A collection of our finest cosmetic dentistry work', 
      imageCount: 20, 
      route: '/smile-gallery/smile-showcase',
      color: 'linear-gradient(135deg, #ffa726 0%, #ff7043 100%)'
    },
    { 
      id: 'clinic-photos', 
      title: 'Clinic Photos', 
      description: 'Take a tour of our state-of-the-art dental facility', 
      imageCount: 10, 
      route: '/smile-gallery/clinic-photos',
      color: 'linear-gradient(135deg, #42a5f5 0%, #1976d2 100%)'
    },
    { 
      id: 'events', 
      title: 'Events', 
      description: 'Community events, seminars, and dental health awareness programs', 
      imageCount: 6, 
      route: '/smile-gallery/events',
      color: 'linear-gradient(135deg, #ab47bc 0%, #8e24aa 100%)'
    },
    { 
      id: 'patient-stories', 
      title: 'Patient Stories', 
      description: 'Real stories from our patients about their dental journey', 
      imageCount: 8, 
      route: '/smile-gallery/patient-stories',
      color: 'linear-gradient(135deg, #26a69a 0%, #00897b 100%)'
    },
    { 
      id: 'technology-showcase', 
      title: 'Technology Showcase', 
      description: 'Advanced dental technology and equipment we use', 
      imageCount: 5, 
      route: '/smile-gallery/technology-showcase',
      color: 'linear-gradient(135deg, #78909c 0%, #546e7a 100%)'
    },
    { 
      id: 'team-gallery', 
      title: 'Team Gallery', 
      description: 'Meet our dedicated dental team and staff', 
      imageCount: 7, 
      route: '/smile-gallery/team-gallery',
      color: 'linear-gradient(135deg, #ff7043 0%, #e64a19 100%)'
    },
    { 
      id: 'awards-recognition', 
      title: 'Awards & Recognition', 
      description: 'Our achievements, certifications, and professional recognition', 
      imageCount: 4, 
      route: '/smile-gallery/awards-recognition',
      color: 'linear-gradient(135deg, #ffd54f 0%, #ffb300 100%)'
    }
  ];
}
