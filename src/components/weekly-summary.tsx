import type React from "react"
import { CheckCircle2, Plus } from "lucide-react"
import { DialogTrigger } from "@radix-ui/react-dialog"
import * as date from "date-fns"
import { ptBR } from "date-fns/locale"

// API
import type { GetSummaryResponse } from "../http/requests/get-summary"

// Components
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { Progress, ProgressIndicator } from "./ui/progress-bar"
import { InOrbitIcon } from "./in-orbit-icon"
import { PendingGoals } from "./pending-goals"

interface WeeklySummaryProps {
  summary: GetSummaryResponse["summary"]
}

export const WeeklySummary: React.FC<WeeklySummaryProps> = ({ summary }) => {
  const currentDate = new Date();

  const fromDate = date.format(date.startOfWeek(currentDate), "dd 'de' MMMM", { locale: ptBR })
  const toDate = date.format(date.endOfWeek(currentDate), "dd 'de' MMMM", { locale: ptBR })

  const completedPercentage = Math.round(
    (summary.completed * 100) / summary.total
  )

  return (
    <main className="max-w-[540px] py-10 px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold">
            {fromDate} - {toDate}
          </span>
        </div>

        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={summary.completed} max={summary.total}>
          <ProgressIndicator style={{ width: `${completedPercentage}%` }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou{" "}
            <span className="text-zinc-100">{summary.completed}</span> de{" "}
            <span className="text-zinc-100">{summary.total}</span> metas nessa
            semana.
          </span>
          <span>{completedPercentage}%</span>
        </div>
      </div>

      <Separator />

      <PendingGoals />

      <div className="space-y-6">
        <h2 className="text-xl font-medium">Sua semana</h2>

        {Object.entries(summary.goalsPerDay).map(([goalDate, goals]) => {
          let weekDay: string;
          const parsedDate = date.format(goalDate, "dd 'de' MMMM", { locale: ptBR })

          switch (date.differenceInDays(currentDate, goalDate)) {
            case 0:
              weekDay = "Hoje";
              break;
            case 1:
              weekDay = "Amanhã";
              break;
            default:
              weekDay = date.format(goalDate, "dd");
              break;
          }

          return (
            <div className="space-y-4" key={goalDate}>
              <div className="flex items-center font-medium">
                <h3 className="font-medium capitalize">{weekDay}</h3>
                <span className="ml-1 text-zinc-400 text-xs">({parsedDate})</span>
              </div>

              <ul className="space-y-3">
                {goals.map(goal => {
                  const parsedTime = date.format(goal.createdAt, "HH:mm'h'")

                  return (
                    <li className="flex items-center gap-2" key={goal.id}>
                      <CheckCircle2 className="size-4 text-pink-500" />
                      <span className="text-sm text-zinc-400">
                        Você completou "
                        <span className="text-zinc-100">{goal.title}</span>" às{" "}
                        <span className="text-zinc-100">{parsedTime}</span>
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </main>
  )
}
