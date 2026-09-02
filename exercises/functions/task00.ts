// 5. Функция
function calculateOutstandingBalance(invoiceTotal: number, paidAmount: number): number {
  return invoiceTotal - paidAmount > 0 ? invoiceTotal - paidAmount : 0;
}

// 6. Массив и цикл
function sumOfPositive(nums: Array<number>): number {
  let total = 0;
  for (const num of nums) {
    if (num > 0) {
      total += num;
    }
  }
  return total;
}

// 7. Декомпозиция
function getInvoiceStatus(invoiceTotal: number, paidAmount: number): string {
  if (paidAmount === 0) {
    return 'unpaid';
  } else if (paidAmount < invoiceTotal) {
    return 'partially_paid';
  }
  return 'paid';
}

// 5. Практическое упражнение
function canRecordPayment(
  invoiceTotal: number,
  paidAmount: number,
  newPaymentAmount: number,
  invoiceCancelled: boolean,
): boolean {
  if (invoiceTotal < 0 || paidAmount < 0 || newPaymentAmount <= 0 || invoiceCancelled) {
    return false;
  }
  return paidAmount < invoiceTotal;
}
