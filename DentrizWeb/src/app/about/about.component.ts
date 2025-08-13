import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Lead Dentist',
      description: 'With over 15 years of experience in general and cosmetic dentistry.',
      image: '👩‍⚕️'
    },
    {
      name: 'Dr. Michael Chen',
      position: 'Orthodontist',
      description: 'Specialized in braces and orthodontic treatments for all ages.',
      image: '👨‍⚕️'
    },
    {
      name: 'Dr. Emily Rodriguez',
      position: 'Pediatric Dentist',
      description: 'Dedicated to making dental visits fun and comfortable for children.',
      image: '👩‍⚕️'
    }
  ];
}
