import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
   count: number = 0;
  errorMessage: string = '';
  showError: boolean = false;
  // You'll also need a way to manage the overlay state, perhaps like this:
  showOverlay: boolean = false;
  overlayMessage: string = '';

   handleCounter(operation: string) {
    // Clear any previous error messages
    this.clearError();

    if (operation === 'minus') {
      if (this.count > 0) {
        this.count = this.count - 1;
      } else {
        // Prevent going below 0 and show an error
        this.errorMessage = 'Count cannot go below zero!';
        this.showError = true;
        // Optionally, hide the error after some time
        setTimeout(() => this.clearError(), 3000);
      }
    } else if (operation === 'plus') {
      this.count = this.count + 1;
    } else if (operation === 'reset') { // Explicitly handle 'reset'
      this.count = 0;
      this.overlayMessage = 'Counter has been reset!';
      this.showOverlay = true;
      setTimeout(() => this.showOverlay = false, 2000); // Hide overlay after 2 seconds
    }

  }
  clearError() {
    this.errorMessage = '';
    this.showError = false;
  }

  // Helper to close the overlay manually if needed (e.g., if you add a close button)
  closeOverlay() {
    this.showOverlay = false;
  }
}

