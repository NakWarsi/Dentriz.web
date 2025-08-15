import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface PatientStory {
  id: number;
  patientName: string;
  age: number;
  treatment: string;
  story: string;
  image: string;
  rating: number;
  duration: string;
}

@Component({
  selector: 'app-patient-stories',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './patient-stories.component.html',
  styleUrls: ['./patient-stories.component.css']
})
export class PatientStoriesComponent {
  selectedStory: PatientStory | null = null;
  showModal = false;

  patientStories: PatientStory[] = [
    {
      id: 1,
      patientName: "Sarah Johnson",
      age: 28,
      treatment: "Complete Smile Makeover",
      story: "I was always self-conscious about my smile. After my complete smile makeover, I feel like a new person. The confidence boost has changed my life both personally and professionally.",
      image: "assets/images/gallery/patient-stories/patient1.jpg",
      rating: 5,
      duration: "6 months"
    },
    {
      id: 2,
      patientName: "Michael Chen",
      age: 45,
      treatment: "Dental Implants",
      story: "Losing my teeth was devastating. The dental implant procedure was smooth, and now I can eat anything I want. The implants look and feel completely natural.",
      image: "assets/images/gallery/patient-stories/patient2.jpg",
      rating: 5,
      duration: "4 months"
    },
    {
      id: 3,
      patientName: "Emily Rodriguez",
      age: 32,
      treatment: "Invisalign Treatment",
      story: "I was hesitant about braces as an adult, but Invisalign was perfect. It was comfortable, discreet, and the results are amazing. I wish I had done it sooner!",
      image: "assets/images/gallery/patient-stories/patient3.jpg",
      rating: 5,
      duration: "18 months"
    },
    {
      id: 4,
      patientName: "David Thompson",
      age: 52,
      treatment: "Emergency Dental Care",
      story: "When I had a dental emergency, the team was incredibly responsive and caring. They not only fixed my immediate problem but also helped me prevent future issues.",
      image: "assets/images/gallery/patient-stories/patient4.jpg",
      rating: 5,
      duration: "1 day"
    },
    {
      id: 5,
      patientName: "Lisa Wang",
      age: 29,
      treatment: "Teeth Whitening & Veneers",
      story: "My wedding was approaching and I wanted a perfect smile. The combination of whitening and veneers gave me exactly what I dreamed of. I couldn't be happier!",
      image: "assets/images/gallery/patient-stories/patient5.jpg",
      rating: 5,
      duration: "3 months"
    },
    {
      id: 6,
      patientName: "Robert Martinez",
      age: 38,
      treatment: "Root Canal & Crown",
      story: "I was terrified of root canals, but the procedure was painless and the staff was so reassuring. The crown looks perfect and I'm back to normal eating.",
      image: "assets/images/gallery/patient-stories/patient6.jpg",
      rating: 5,
      duration: "2 weeks"
    },
    {
      id: 7,
      patientName: "Jennifer Lee",
      age: 26,
      treatment: "Cosmetic Bonding",
      story: "I had a small chip in my front tooth that always bothered me. The cosmetic bonding was quick, painless, and now my smile looks perfect again.",
      image: "assets/images/gallery/patient-stories/patient7.jpg",
      rating: 5,
      duration: "1 hour"
    },
    {
      id: 8,
      patientName: "Thomas Anderson",
      age: 65,
      treatment: "Full Mouth Reconstruction",
      story: "After years of dental problems, I finally decided to get a full mouth reconstruction. It was life-changing. I can eat, speak, and smile with confidence again.",
      image: "assets/images/gallery/patient-stories/patient8.jpg",
      rating: 5,
      duration: "8 months"
    }
  ];

  openModal(story: PatientStory) {
    this.selectedStory = story;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedStory = null;
  }
}
