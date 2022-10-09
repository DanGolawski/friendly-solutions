export interface WorkAssignment {
    person_name: string;
    status: string
}

export interface Work {
    work_order_id: number;
    description: string;
    received_date: string;
    assigned_to: WorkAssignment[],
    status: string,
    priority: string
}

export interface Page<T> {
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
  data: T[];
}

