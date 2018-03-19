import Application from "./application";
import registerServiceWorker from './registerServiceWorker';


const application = Application.createApplication();
application.init();
application.start();


registerServiceWorker();