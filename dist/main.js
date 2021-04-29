"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const res_interceptor_1 = require("./core/res.interceptor");
const path_1 = require("path");
const swagger_1 = require("@nestjs/swagger");
const file_filter_1 = require("./middleware/file.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new file_filter_1.NotFoundExceptionFilter());
    app.enableCors();
    app.setGlobalPrefix('api/pherusa');
    app.useStaticAssets(path_1.join(__dirname, '../public'));
    app.useGlobalInterceptors(app.get(res_interceptor_1.ResponseInterceptor));
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Pherusa-Api')
        .setDescription('Pherusa server apis')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
    await app.listen(4000);
    console.log('http://localhost:4000/api-docs');
}
bootstrap();
//# sourceMappingURL=main.js.map