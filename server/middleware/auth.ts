import UrlPattern from "url-pattern"

import { sendError } from "h3"
import { decodeAccessToken } from "~/lib/tokens/generateTokens"
import { getUserById } from "~/lib/user"


export default defineEventHandler(async (event) => {
    const endpoints = [
        '/api/auth/user',
        
    ]

    const isHandledByThisMiddleware = endpoints.some(endopoint => {
        const pattern = new UrlPattern(endopoint)

        return pattern.match(event.node.req.url?? "")
    })

    if (!isHandledByThisMiddleware) {
        return
    }

    const token = event.headers.get('authorization')?.split(' ')[1]
    if (!token) { return}

    const decoded = decodeAccessToken(token)

    if (!decoded) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Unauthorized'
        }))
    }


    try {
        const userId = decoded.sub

        const user = await getUserById(userId)

        event.context.auth = { user }
        
    } catch (error) {
        return
    }

})