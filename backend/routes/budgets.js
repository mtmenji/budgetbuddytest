const express = require('express')
const { createBudget, getBudgets, deleteBudget, updateBudget, getBudget } = require('../controllers/budgetController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()
router.use(requireAuth)

//GET all budgets.
router.get('/', getBudgets)

//GET a single budgets.
router.get('/:id', getBudget)

//POST a single budget.
router.post('/', createBudget)

//DELETE a budget.
router.delete('/:id', deleteBudget)

//UPDATE a single budget.
router.put('/:id', updateBudget)


module.exports = router