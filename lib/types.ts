export interface User {
  id: string
  email: string
  created_at: string
}

export interface Organization {
  id: number
  name: string
  slug: string
  owner_id: string
  created_at: string
  updated_at: string
}

export interface OrganizationMember {
  id: number
  organization_id: number
  user_id: string
  role: 'owner' | 'admin' | 'member'
  joined_at: string
}

export interface Project {
  id: number
  organization_id: number
  key: string
  name: string
  color: string
  created_at: string
  updated_at: string
}

export interface Entry {
  id: number
  organization_id: number
  project_id: number
  user_id: string
  occurred_date: string
  title: string
  content: string
  created_at: string
  updated_at: string
}
