/**
 * @openapi
 * /api/token:
 *   get:
 *     summary: Generate token
 *     tags :
 *         - Token
 *     responses:
 *       '200':
 *         description: Generate Token
 *         content:
 *           application/json:
 *             schema:
                $ref: '#/components/schemas/GenerateTokenResponse'
 */
