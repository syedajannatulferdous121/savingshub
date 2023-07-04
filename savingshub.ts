// Define the SavingsHub class
class SavingsHub {
  private savings: number;

  constructor() {
    this.savings = 0;
  }

  // Deposit money into savings
  deposit(amount: number): void {
    if (amount > 0) {
      this.savings += amount;
      console.log(`Deposited ${amount} into savings.`);
    } else {
      console.log("Invalid deposit amount.");
    }
  }

  // Withdraw money from savings
  withdraw(amount: number): void {
    if (amount > 0) {
      if (this.savings >= amount) {
        this.savings -= amount;
        console.log(`Withdrawn ${amount} from savings.`);
      } else {
        console.log("Insufficient funds in savings.");
      }
    } else {
      console.log("Invalid withdrawal amount.");
    }
  }

  // Check current savings balance
  checkBalance(): void {
    console.log(`Current savings balance: ${this.savings}`);
  }
}

// Create an instance of SavingsHub
const savingsHub = new SavingsHub();

// Prompt the user for actions
let userInput = prompt("Enter your choice (deposit, withdraw, balance, exit):");

while (userInput && userInput.toLowerCase() !== "exit") {
  switch (userInput.toLowerCase()) {
    case "deposit":
      const depositAmount = parseFloat(prompt("Enter the amount to deposit:"));
      savingsHub.deposit(depositAmount);
      break;

    case "withdraw":
      const withdrawAmount = parseFloat(prompt("Enter the amount to withdraw:"));
      savingsHub.withdraw(withdrawAmount);
      break;

    case "balance":
      savingsHub.checkBalance();
      break;

    default:
      console.log("Invalid choice.");
      break;
  }

  userInput = prompt("Enter your choice (deposit, withdraw, balance, exit):");
}

console.log("Exited the SavingsHub.");
