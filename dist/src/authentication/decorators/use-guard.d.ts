import Guard from '../guards/guard';
/**
 * Decorator used to register a Guard on a request
 */
export default function UseGuard(guard: Guard): (target: any, key: string, descriptor: PropertyDescriptor) => void;
