'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { Organization } from '@/lib/types'

export default function DashboardPage() {
  const [organizations, setOrganizations] = useState<Organization[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedOrgId, setSelectedOrgId] = useState<number | null>(null)

  useEffect(() => {
    fetchOrganizations()
  }, [])

  async function fetchOrganizations() {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) return

      const { data, error } = await supabase
        .from('organizations')
        .select('*')
        .or(`owner_id.eq.${user.id},organization_members.user_id.eq.${user.id}`)

      if (error) throw error
      setOrganizations(data || [])
    } catch (err) {
      console.error('Error fetching organizations:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">로딩 중...</p>
      </div>
    )
  }

  if (organizations.length === 0) {
    return (
      <div className="card text-center py-12">
        <h2 className="text-2xl font-bold mb-4">조직이 없습니다</h2>
        <p className="text-gray-600 mb-6">
          새로운 조직을 만들어서 시작하세요
        </p>
        <button className="btn-primary">새 조직 만들기</button>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">내 조직</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {organizations.map((org) => (
          <div key={org.id} className="card hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">{org.name}</h3>
            <p className="text-gray-600 mb-4">{org.slug}</p>
            <button className="btn-primary w-full">
              진입
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
