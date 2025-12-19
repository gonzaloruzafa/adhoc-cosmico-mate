import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export const trackEvent = async (event: string, metadata: any = {}) => {
    if (!supabase) {
        console.log(`[Track Event] ${event}`, metadata);
        return;
    }

    try {
        const { error } = await supabase.from('quiz_sessions').insert([
            {
                event_name: event,
                metadata,
                timestamp: new Date().toISOString(),
                utm_source: metadata.utm_source || null,
                utm_medium: metadata.utm_medium || null,
                utm_campaign: metadata.utm_campaign || null,
            }
        ]);

        if (error) console.error('Error tracking event:', error);
    } catch (err) {
        console.error('Tracking failed:', err);
    }
};
