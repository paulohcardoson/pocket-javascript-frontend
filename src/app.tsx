import type React from "react";
import { Loader2 } from "lucide-react"
import { Dialog } from "@radix-ui/react-dialog"
import { useQuery } from "@tanstack/react-query"

// API
import { getSummary } from "./http/requests/get-summary"

// Components
import { EmptyGoals } from "./components/empty-goals"
import { CreateGoal } from "./components/create-goal"
import { WeeklySummary } from "./components/weekly-summary"


export const App: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
  })

  if (isLoading || !data) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="text-zinc-500 animate-spin size-10" />
      </div>
    )
  }

  return (
    <Dialog>
      {data.summary.total > 0 ? (
        <WeeklySummary summary={data.summary} />
      ) : (
        <EmptyGoals />
      )}

      <CreateGoal />
    </Dialog>
  )
}
