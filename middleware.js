import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/plugin/Github%20Workflows')) {
        return NextResponse.redirect(new URL('/plugin/github-workflows', request.url))
    }
    if (request.nextUrl.pathname.startsWith('/plugin/Gitlab%20Pipelines')) {
        return NextResponse.redirect(new URL('/plugin/gitlab-pipelines', request.url))
    }
    if (request.nextUrl.pathname.startsWith('/plugin/Kong%20Service%20Manager')) {
        return NextResponse.redirect(new URL('/plugin/kong-service-manager', request.url))
    }
    if (request.nextUrl.pathname.startsWith('/plugin/Kubernetes%20GPT%20Analyzer')) {
        return NextResponse.redirect(new URL('/plugin/kubernetes-gpt-analyzer', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/plugin/:path*',
}