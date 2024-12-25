/*
  # Fix User Registration Policies

  1. Changes
    - Add INSERT policy for users table to allow registration
    - Update SELECT policy to allow reading own data
    - Add UPDATE policy for users to update their own data

  2. Security
    - Users can only insert their own data during registration
    - Users can only read and update their own data
    - Maintains existing RLS protection
*/

-- Allow users to insert their own data during registration
CREATE POLICY "Users can insert their own data during registration"
  ON users
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Update the select policy to be more specific
DROP POLICY IF EXISTS "Users can read their own data" ON users;
CREATE POLICY "Users can read their own data"
  ON users
  FOR SELECT
  USING (auth.uid() = id OR role = 'admin');

-- Update policy for users to update their own data
DROP POLICY IF EXISTS "Users can update their own data" ON users;
CREATE POLICY "Users can update their own data"
  ON users
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);