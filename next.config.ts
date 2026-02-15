import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    images:{
        qualities:[50,75,100],   
        remotePatterns:[
            {
                protocol: 'https',
                hostname: '**',
            },
            {
                protocol: 'http',
                hostname: '**',
            },
        ]
    }
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);