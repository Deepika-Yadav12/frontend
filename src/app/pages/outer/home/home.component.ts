import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  totalSlides = 3;
  autoSlideInterval: any;

  ngOnInit(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
  }

  faqs = [
    {
      question: 'What is WrenchWise?',
      answer: 'WrenchWise is your best friend when it comes to any car services! With efficient pricing, highly skilled experts, the latest equipment and technology and genuine parts, we bring you a range of services designed to keep your car in the best shape.'
    },
    {
      question: 'Why should I choose WrenchWise ?',
      answer: 'WrenchWise brings to your doorstep the best car services and solutions with fast delivery and fair pricing. What’s more, you can save up to a whopping 40% as compared to what you will spend at Authorised Service Centres and Multi-brand workshops'
    },
    {
      question: 'How is WrenchWise different from the other platforms out there?',
      answer: 'At WrenchWise, we’re not a lead generation focused business – you and your car are our first priorities. Satisfied, happy customers with smoothly functioning cars are our goals, and so we believe in being hands-on for the complete experience right from procurement of spare parts to the actual servicing, ensuring quality control. We send you prompt personalized updates about your car and are completely transparent about the pricing and quality of our services.'
    },
    {
      question: 'Can I get updates on my vehicle repair status?',
      answer: 'Yes, WrenchWise sends automatic updates via email and SMS throughout the service process.'
    },
    {
      question: 'How do I register on WrenchWise?',
      answer: 'Just go to our Register page, fill in your details, and select your role (User, Admin, or Technician). Or You can call us at +91 9999999999 or request a call back, and we will have our experts call you back in no time'
    }
  ];
  
  steps = [
    { number: '01', title: 'Choose', description: 'Choose your service from our wide range of offerings' },
    { number: '02', title: 'Book', description: 'Make an appointment with us' },
    { number: '03', title: 'Fair Pricing', description: 'Always get a fair quote' },
    { number: '04', title: 'At Your Doorstep', description: 'Get a door step pick up & drop facility' },
  ];
  
}

