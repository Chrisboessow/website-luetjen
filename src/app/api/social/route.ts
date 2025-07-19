import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { cache } from 'react';

// Cache-Datei Pfad
const CACHE_FILE = path.join(process.cwd(), 'data', 'social-cache.json');

// Typen für die Social Media Daten
interface SocialPost {
  id: string;
  platform: 'instagram' | 'facebook' | 'linkedin';
  content: string;
  imageUrl?: string;
  link: string;
  date: string;
}

interface SocialStats {
  platform: 'instagram' | 'facebook' | 'linkedin';
  followers: number;
  posts: number;
  lastUpdated: string;
}

// Funktion zum Lesen des Caches
const readCache = () => {
  try {
    if (!fs.existsSync(CACHE_FILE)) {
      return {
        posts: [],
        stats: []
      };
    }
    const data = fs.readFileSync(CACHE_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading cache:', error);
    return {
      posts: [],
      stats: []
    };
  }
};

// Funktion zum Schreiben des Caches
const writeCache = (data: any) => {
  try {
    const dirPath = path.dirname(CACHE_FILE);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(CACHE_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing cache:', error);
  }
};

// GET Handler für Social Media Daten
export async function GET() {
  const cache = readCache();
  
  return NextResponse.json(cache);
}

// POST Handler zum Aktualisieren der Daten
export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validierung der Daten
    if (!data.posts && !data.stats) {
      return NextResponse.json(
        { error: 'Invalid data format' },
        { status: 400 }
      );
    }

    const currentCache = readCache();
    const newCache = {
      posts: data.posts || currentCache.posts,
      stats: data.stats || currentCache.stats
    };

    writeCache(newCache);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating social data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 