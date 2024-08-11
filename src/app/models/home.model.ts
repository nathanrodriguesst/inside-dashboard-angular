export interface Home {
  response: {
    exploitCount: number;
    recentActivities: RecentActivity[];
    scanCount: number;
    vulnerabilitiesCount: number;
    vulnerableServicesRegisters: VulnerableService[];
  };
}

export interface RecentActivity {
  activityDate: string;
  activityTarget: string;
  activityType: string;
  exploited: boolean;
  id: number;
}

export interface VulnerableService {
  date: string;
  id: number;
  ip: string;
  port: number;
  service: string;
}