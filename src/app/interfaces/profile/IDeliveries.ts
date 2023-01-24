export interface IStatus {
  statusName: 'Procesando' | 'Preparando' | 'En Camino' | 'Entregado';
  status: 'done' | 'inProgress' | 'notYet';
}
