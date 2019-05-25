export default class MaicApp {
    private app;
    constructor();
    /**
     * Start the app, listening on a given port
     */
    listen(port: number): Promise<void>;
    /**
     * Register a middleware
     */
    use(...args: any[]): void;
}
