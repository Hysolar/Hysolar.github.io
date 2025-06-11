import { Zap, Shield, Heart, Coffee, Smile, Type, TabletSmartphone, CodeXml, Wrench, Syringe, Bandage, Baby } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Shield,
                title: 'Preventieve en algemene tandheelkunde',
                description: 'Regelmatige controles, gebitsreiniging en advies voor een gezonde mond.'
            },
            {
                icon: Bandage,
                title: 'Restauratieve tandheelkunde',
                description: 'Herstel van aangetaste tanden met vullingen, kronen of bruggen.'
            },
            {
                icon: Syringe,
                title: 'Endodontie',
                description: 'Wortelkanaalbehandelingen voor het behoud van ernstig aangetaste tanden.'
            },
            {
                icon: Smile,
                title: 'Prothetische tandheelkunde',
                description: 'Vervanging van ontbrekende tanden met kunstgebitten, bruggen of implantaten.'
            },
            {
                icon: Baby,
                title: 'Kinder- en jeugd tandheelkunde',
                description: 'Speciale zorg voor het gebit van kinderen en tieners in elke groeifase.'
            }
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                title: 'Made with Love',
                description: 'Crafted with attention to detail'
            },
            {
                icon: Coffee,
                title: 'Always Fresh',
                description: 'Regular updates and improvements'
            },
            {
                icon: Smile,
                title: 'User Friendly',
                description: 'Intuitive and easy to use'
            }
        ]
    }
};
