import Guard from '../guards/guard';
import TypeClass from '../../types/type-class';
/**
 * Decorator used to register a Guard on a request
 */
export default function UseGuard(guardClass: TypeClass<Guard>): (target: any, key: string, descriptor: PropertyDescriptor) => void;
