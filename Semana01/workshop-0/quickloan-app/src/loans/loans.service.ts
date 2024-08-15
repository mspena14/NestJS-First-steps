import { Injectable } from '@nestjs/common';

@Injectable()
export class LoansService {
  calculateLoanRisk(userProfile: any): string {
    // Lógica básica para determinar el riesgo
    if (userProfile.creditScore > 700) {
      return 'Low Risk';
    } else {
      return 'High Risk';
    }
  }
}