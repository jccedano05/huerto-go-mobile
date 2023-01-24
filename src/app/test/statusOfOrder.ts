import { IStatus } from '../interfaces/profile/IDeliveries';

export const statusOfOrder: IStatus[] = [
  {
    statusName: 'Procesando',
    status: 'done',
  },
  {
    statusName: 'Preparando',
    status: 'inProgress',
  },
  {
    statusName: 'En Camino',
    status: 'notYet',
  },
  {
    statusName: 'Entregado',
    status: 'notYet',
  },
];
