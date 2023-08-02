/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     GenerateTokenResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Pesan dari response
 *         data:
 *           type: object
 *           description: Response data
 *           properties:
 *             token:
 *               type: string
 *               description: Token untuk akses resource
 *     FindUsersResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Pesan dari response
 *         data:
 *           type: array
 *           description: Response data
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: ID User
 *               userName:
 *                 type: string
 *                 description: Username User
 *               accountNumber:
 *                 type: string
 *                 description: Nomer Telepon User
 *               emailAddress:
 *                 type: string
 *                 description: Alamat Email User
 *               identityNumber:
 *                 type: string
 *                 description: Nomor Identitas User
 *     FindUsersByPropertyResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Pesan dari response
 *         data:
 *           type: object
 *           description: Response data
 *           properties:
 *             id:
 *               type: string
 *               description: ID User
 *             userName:
 *               type: string
 *               description: Username User
 *             accountNumber:
 *               type: string
 *               description: Nomer Telepon User
 *             emailAddress:
 *               type: string
 *               description: Alamat Email User
 *             identityNumber:
 *               type: string
 *               description: Nomor Identitas User
 *     CreateUsersRequest:
 *       type: object
 *       properties:
 *         userName:
 *           type: string
 *           description: Username User
 *         accountNumber:
 *           type: string
 *           description: Nomer Telepon User
 *         emailAddress:
 *           type: string
 *           description: Alamat Email User
 *         identityNumber:
 *           type: string
 *           description: Nomor Identitas User
 *       required:
 *         - userName
 *         - accountNumber
 *         - emailAddress
 *         - identityNumber
 *     CreateUsersResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Pesan dari response
 *         data:
 *           type: object
 *           description: Respons data
 *           properties:
 *             id:
 *               type: string
 *               description: ID pengguna yang dibuat
 *     UpdateUsersRequest:
 *       type: object
 *       properties:
 *         userName:
 *           type: string
 *           description: Username User
 *         accountNumber:
 *           type: string
 *           description: Nomer Telepon User
 *         emailAddress:
 *           type: string
 *           description: Alamat Email User
 *         identityNumber:
 *           type: string
 *           description: Nomor Identitas User
 *     UpdateUsersResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Pesan dari response
 *         data:
 *           type: object
 *           description: Respons data
 *           properties:
 *             id:
 *               type: string
 *               description: ID pengguna yang diubah
 *     DeleteUsersResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Pesan dari response
 *         data:
 *           type: object
 *           description: Respons data
 *           properties:
 *             id:
 *               type: string
 *               description: ID pengguna yang dihapus
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         errors:
 *           type: string
 *           description: Pesan dari response
 */
