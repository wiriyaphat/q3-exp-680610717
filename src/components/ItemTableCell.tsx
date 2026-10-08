import type { Expense } from "@/types/datatypes";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  // Table,
  // TableBody,
  TableCell,
  // TableHead,
  // TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash } from "lucide-react";
type ExpenseTableProps = {
  expense: Expense;
  // title
  // amount: Expense;
  // category: Expense["category"];
  // date: Expense;
};

export function ExpenseTable({ expense }: ExpenseTableProps) {
  return (
    <TableRow className="mx-auto">
      <TableCell className="text-muted-foreground">{expense.date}</TableCell>
      <TableCell className="font-medium">{expense.title}</TableCell>
      <TableCell>
        <Badge variant="outline">{expense.category}</Badge>
      </TableCell>
      <TableCell className="text-right font-semibold">
        {expense.amount}
      </TableCell>
      <TableCell className="text-right">
        <Button
          className="text-white bg-red-500 hover:bg-red-600 text-white"
          variant="ghost"
          size="sm"
        >
          <Trash className="h-4 w-4" />
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
