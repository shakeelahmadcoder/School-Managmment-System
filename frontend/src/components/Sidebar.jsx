import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronDown, 
  ChevronRight,
  LayoutDashboard,
  GraduationCap,
  Users,
  UserCircle,
  BookOpen,
  Wallet,
  School,
  BookText,
  Calendar,
  ClipboardCheck,
  FileText,
  Bus,
  Hotel,
  Megaphone,
  Mail
} from 'lucide-react'

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({})

  const toggleMenu = (menu) => {
    setOpenMenus(prev => ({...prev, [menu]: !prev[menu]}))
  }

  const menuItems = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      id: 'dashboard',
      subItems: [
        { name: 'Admin', path: '/' },
        { name: 'Student', path: '/dashboard/students' },
        { name: 'Teachers', path: '/dashboard/teachers' },
        { name: 'Parents', path: '/dashboard/parents' }
      ]
    },
    {
      name: 'Students',
      icon: GraduationCap,
      id: 'students',
      subItems: [
        { name: 'All Students', path: '/students' },
        { name: 'Admit Form', path: '/students/add' },
        { name: 'Student Promotion', path: '/students/promotion' }
      ]
    },
    {
      name: 'Teachers',
      icon: Users,
      id: 'teachers',
      subItems: [
        { name: 'All Teachers', path: '/teachers' },
        { name: 'Add Teacher', path: '/teachers/add' },
        { name: 'Teacher Details', path: '/teachers/details' }
      ]
    },
    {
      name: 'Parents',
      icon: UserCircle,
      path: '/parents'
    },
    {
      name: 'Library',
      icon: BookOpen,
      id: 'library',
      subItems: [
        { name: 'All Books', path: '/library' },
        { name: 'Add Book', path: '/library/add' }
      ]
    },
    {
      name: 'Account',
      icon: Wallet,
      id: 'account',
      subItems: [
        { name: 'Fees Collection', path: '/account/fees-collection' },
        { name: 'All Expenses', path: '/account/all-expensess' },
        { name: 'Add Expenses', path: '/account/add-expensess' },
        { name: 'Create Student Payment', path: '/account/create-student-payment' }
      ]
    },
    {
      name: 'Class',
      icon: School,
      id: 'class',
      subItems: [
        { name: 'All Classes', path: '/class' },
        { name: 'Add New Class', path: '/class/add' }
      ]
    },
    {
      name: 'Subject',
      icon: BookText,
      path: '/subjects'
    },
    {
      name: 'Class Routine',
      icon: Calendar,
      path: '/class-routine'
    },
    {
      name: 'Attendance',
      icon: ClipboardCheck,
      path: '/attendance'
    },
    {
      name: 'Exam',
      icon: FileText,
      id: 'exam',
      subItems: [
        { name: 'Exam Schedule', path: '/exam/schedule' },
        { name: 'Exam Grades', path: '/exam/grades' }
      ]
    },
    {
      name: 'Transport',
      icon: Bus,
      path: '/transport'
    },
    {
      name: 'Hostel',
      icon: Hotel,
      path: '/hostel'
    },
    {
      name: 'Notice',
      icon: Megaphone,
      path: '/notice'
    },
    {
      name: 'Message',
      icon: Mail,
      path: '/message'
    }
  ]

  return (
    <>
      

      <aside className='w-64 bg-linear-to-b from-gray-900 to-gray-800 h-screen overflow-y-auto fixed sidebar-scroll shadow-2xl'>
        {/* Logo Section */}
        <div className='p-6 border-b border-gray-700'>
          <h1 className='text-2xl font-bold text-yellow-400 tracking-wide'>EduManage</h1>
          <p className='text-xs text-gray-400 mt-1'>School Management System</p>
        </div>

        {/* Menu Items */}
        <nav className='py-4 px-3'>
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.name} className='mb-1'>
                {item.subItems ? (
                  <>
                    <button onClick={() => toggleMenu(item.id)} className='w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-yellow-400 rounded-lg transition-all duration-200 group'>
                      <span className='flex items-center gap-3'>
                        <Icon size={20} className='group-hover:scale-110 transition-transform' />
                        <span className='font-medium text-sm'>{item.name}</span>
                      </span>
                      {openMenus[item.id] ? 
                        <ChevronDown size={18} className='text-yellow-400'/> : 
                        <ChevronRight size={18}/>
                      }
                    </button>

                    {/* SubItems */}
                    {openMenus[item.id] && (
                      <div className='ml-4 mt-1 mb-2 border-l-2 border-gray-700 pl-4 space-y-1'>
                        {item.subItems.map((subItem) => (
                          <Link 
                            key={subItem.name}
                            to={subItem.path}
                            className='block px-4 py-2 text-sm text-gray-400 hover:text-yellow-400 hover:bg-gray-700 rounded-md transition-all duration-200'
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={item.path} className='flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-yellow-400 rounded-lg transition-all duration-200 group'>
                    <Icon size={20} className='group-hover:scale-110 transition-transform' />
                    <span className='font-medium text-sm'>{item.name}</span>
                  </Link>
                )}
              </div>
            )
          })}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar