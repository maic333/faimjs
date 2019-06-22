import TypeClass from '../../../types/type-class';
/**
 * Decorator used to define an API Controller
 */
export default function ApiController(): (target: TypeClass<{}>) => void;
