import { CreateTask } from "../../components/CreateTask";
import { Header } from "../../components/Header";

import styles from './ActivityView.module.css'

export function ActivityView() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <CreateTask />
      </div>
    </>
  )
}