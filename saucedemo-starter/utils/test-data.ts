import { User } from '../models/User';

export const users: Record<string, User> = {
  standard: { username: 'standard_user', password: 'secret_sauce' },
  locked: { username: 'locked_out_user', password: 'secret_sauce' },
  problem: { username: 'problem_user', password: 'secret_sauce' },
  performance: { username: 'performance_glitch_user', password: 'secret_sauce' },
  error: { username: 'error_user', password: 'secret_sauce' },
  visual: { username: 'visual_user', password: 'secret_sauce' },
  invalid: { username: 'standard_user', password: 'secret_s'}
};

export const routes = {
  base: '/',
  inventory: '/inventory.html',
};

export const logginErrors={
  lockedOut:'Epic sadface: Sorry, this user has been locked out.',
  invalidCredentials: 'Epic sadface: Username and password do not match any user in this service'
}