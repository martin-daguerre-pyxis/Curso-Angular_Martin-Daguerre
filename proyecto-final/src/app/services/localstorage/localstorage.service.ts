import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class LocalstorageService {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    getObject<T>(key: string): T | undefined {
        if (this.isPlatformServer()) return undefined;
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : undefined;
    }

    setObject<T>(key: string, item: T): void {
        if (this.isPlatformServer()) return;
        localStorage.setItem(key, JSON.stringify(item));
    }

    getItem(key: string): string | null {
        if (this.isPlatformServer()) return null;
        return localStorage.getItem(key);
    }

    removeItem(key: string): void {
        if (this.isPlatformServer()) return;
        localStorage.removeItem(key);
    }

    setItem(key: string, data: string): void {
        if (this.isPlatformServer()) return;
        localStorage.setItem(key, data);
    }

    private isPlatformServer() {
        return isPlatformServer(this.platformId);
    }
}
