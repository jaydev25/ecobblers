"use strict";
/*
 * spurtcommerce API
 * version 3.0
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const CategoryModel_1 = require("../models/CategoryModel");
let CategoryRepository = class CategoryRepository extends typeorm_1.Repository {
};
CategoryRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(CategoryModel_1.Category)
], CategoryRepository);
exports.CategoryRepository = CategoryRepository;
//# sourceMappingURL=CategoryRepository.js.map