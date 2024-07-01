import { Trash, Check } from '@phosphor-icons/react'

import { TaskType } from '../CreateTask'

import styles from './TaskItem.module.css'

interface Props {
  data: TaskType
  removeTask: (id: number) => void
  toggleTaskStatus: ({ id, title, status }: { id: string; title: string; status: boolean }) => void
}

export function TaskItem({ data, removeTask, toggleTaskStatus }: Props) {
  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, title: data.title, status: !data.status })
  }

  function handleRemove() {
    removeTask(data.id)
  }

  const checkboxCheckedClassname = data.status
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']
  const paragraphCheckedClassname = data.status
    ? styles['paragraph-checked']
    : ''

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox" onClick={handleTaskToggle}>
          <input readOnly type="checkbox" checked={data.status} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {data.status && <Check size={12} />}
          </span>

          <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {data.title}
          </p>
        </label>
      </div>

      <button onClick={handleRemove}>
        <Trash size={18} color='#62636C' style={{cursor: 'pointer'}} weight='bold'/>
      </button>
    </div>
  )
}