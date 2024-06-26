import { Trash, Check } from '@phosphor-icons/react'

import { TaskType } from '../CreateTask'

import styles from './TaskItem.module.css'

interface Props {
  data: TaskType
  removeTask: (id: number) => void
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function TaskItem({ data, removeTask, toggleTaskStatus }: Props) {
  function handleTaskToggle() {
    console.log(data.done)
    toggleTaskStatus({ id: data.id, value: !data.done })
  }

  function handleRemove() {
    removeTask(data.id)
  }

  const checkboxCheckedClassname = data.done
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']
  const paragraphCheckedClassname = data.done
    ? styles['paragraph-checked']
    : ''

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox" onClick={handleTaskToggle}>
          <input readOnly type="checkbox" checked={data.done} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {data.done && <Check size={12} />}
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