import { TransactionType } from 'enums/transaction_type.enum';
import { check } from 'express-validator';

const createCategory = [
  check('type', 'Please enter a type').notEmpty().trim().isIn(Object.values(TransactionType)),
  check('name', 'Please enter a name').notEmpty().isString().trim(),
  check('note', 'Please enter a note').optional().notEmpty().trim(),
];

export const categoryValidation = {
  createCategory,
};
