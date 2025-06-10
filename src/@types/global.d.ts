declare module '*.svg' {
    import * as React from 'react';
    const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }
    >;
    export default ReactComponent;
}

export interface Event {
    id: number;
    name: string;
    total_equipes: number;
    status: boolean;
    data_inicio: string;
    data_fim: string;
}
