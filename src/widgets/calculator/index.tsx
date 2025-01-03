'use client';

import { Card } from '@/shared/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { LoanCalculator } from './ui/loan-calculator';
import { DepositCalculator } from './ui/deposit-calculator';

export function FinancialCalculator() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Financial Calculator</h2>
      <Tabs defaultValue="loan">
        <TabsList>
          <TabsTrigger value="loan">Loan Calculator</TabsTrigger>
          <TabsTrigger value="deposit">Deposit Calculator</TabsTrigger>
        </TabsList>
        <TabsContent value="loan">
          <LoanCalculator />
        </TabsContent>
        <TabsContent value="deposit">
          <DepositCalculator />
        </TabsContent>
      </Tabs>
    </Card>
  );
}