export interface IEvent {
    date: string;
    name: string;
    description: string;
}

// For now it will be in a constant
// Might need to move it into a proper service in the futur
// TODO: Manage year in the list ( 2024 )
export const EVENTS: IEvent[] = [
    {
        date: "Fri Jan 26 2024 00:00:00 GMT+0000",
        name: "Republic Day - India",
        description:
            "While not traditionally associated with love, modern celebrations often include romantic gestures and expressions of love.",
    },
    {
        date: "Thu Jan 25 2024 00:00:00 GMT+0000",
        name: "Saint Dwynwen's Day",
        description:
            "A Welsh holiday dedicated to Saint Dwynwen, the patron saint of lovers.",
    },
    {
        date: "Wed Feb 14 2024 00:00:00 GMT+0000",
        name: "Valentine's Day",
        description:
            "Celebrated in many Western countries (United States, Canada, France, United Kingdom, etc.), it is a day for lovers where couples exchange cards, flowers, and gifts.",
    },
    {
        date: "Wed Feb 14 2024 00:00:00 GMT+0000",
        name: "Valentine's Day in Korea",
        description:
            "Similar to Japan, but with a twist. Women give men chocolates on this day, and men reciprocate on White Day (14 March).",
    },
    {
        date: "Wed Feb 14 2024 00:00:00 GMT+0000",
        name: "Ystävänpäivä (Finland and Estonia)",
        description:
            "Literally 'Friend's Day', this holiday celebrates not only romantic love but also friendships.",
    },
    {
        date: "Sat Feb 24 2024 00:00:00 GMT+0000",
        name: "Dragobete",
        description:
            "A traditional Romanian holiday celebrating love and the renewal of nature.",
    },
    {
        date: "Thu Mar 14 2024 00:00:00 GMT+0000",
        name: "White Day",
        description:
            "In Japan, South Korea, and Taiwan, this day is an opportunity for men to reciprocate the gifts they received from women on Valentine's Day.",
    },
    {
        date: "Tue Mar 19 2024 00:00:00 GMT+0000",
        name: "Saint Joseph's Day (Fallas) - Spain",
        description:
            "Known as 'Fallas' in Valencia, it is a time of festivity and fireworks, often involving themes of love and relationships.",
    },
    {
        date: "Tue Apr 23 2024 00:00:00 GMT+0000",
        name: "Saint George's Day (Spain)",
        description:
            "In Catalonia, this holiday is known as 'Diada de Sant Jordi' where couples exchange books and roses.",
    },
    {
        date: "Tue Apr 23 2024 00:00:00 GMT+0000",
        name: "Lover's Day in Turkey",
        description:
            "Similar to Valentine's Day, couples exchange gifts and celebrate their love.",
    },
    {
        date: "Mon May 20 2024 00:00:00 GMT+0000",
        name: "Love Day in China",
        description:
            "Due to the pronunciation of the number 520 ('wǔ èr líng') which sounds like 'I love you' in Chinese ('wǒ ài nǐ'), this day has become popular for expressing love.",
    },
    {
        date: "Wed Jun 12 2024 00:00:00 GMT+0000",
        name: "Dia dos Namorados in Brazil",
        description:
            "Although this date is the same as Valentine's Day, Brazil also celebrates Dia dos Namorados on June 12, the eve of Saint Anthony, the patron saint of marriage.",
    },
    {
        date: "Mon Jun 24 2024 00:00:00 GMT+0000",
        name: "Inti Raymi - Peru",
        description:
            "The Festival of the Sun, which also involves elements of love and fertility rites.",
    },
    {
        date: "Sat Jul 06 2024 00:00:00 GMT+0000",
        name: "Lovers' Day in Lithuania",
        description:
            "Known as 'Joninės' or 'Rasos', this celebration is linked to the summer solstice and is also considered a celebration of love.",
    },
    {
        date: "Sun Jul 07 2024 00:00:00 GMT+0000",
        name: "Tanabata in Japan",
        description:
            "Based on a romantic legend, this festival celebrates the annual reunion of the lovers Orihime and Hikoboshi (Vega and Altair) separated by the Milky Way.",
    },
    {
        date: "Sun Jul 07 2024 00:00:00 GMT+0000",
        name: "Dia de San Fermín (Spain)",
        description:
            "During the famous Running of the Bulls in Pamplona, there's also a romantic element where people often kiss beneath the mistletoe.",
    },
    {
        date: "Mon Aug 12 2024 00:00:00 GMT+0000",
        name: "Love Day in Thailand",
        description:
            "Corresponds to the birthday of Queen Sirikit, celebrated as National Mother's Day, where familial love is honored.",
    },
    {
        date: "Tue Aug 13 2024 00:00:00 GMT+0000",
        name: "Qixi Festival (China)",
        description:
            "Another festival based on the same legend as Tanabata, where couples celebrate their love.",
    },
    {
        date: "Sat Oct 12 2024 00:00:00 GMT+0000",
        name: "Sweetest Day - United States",
        description:
            "Celebrated mainly in the Midwest, it's similar to Valentine's Day, where people give small gifts to their loved ones.",
    },
    {
        date: "Fri Nov 01 2024 00:00:00 GMT+0000",
        name: "All Saints' Day - Mexico (Día de los Santos)",
        description:
            "A day to remember loved ones who have passed away, often with romantic overtones in the memories shared.",
    },
    {
        date: "Mon Nov 11 2024 00:00:00 GMT+0000",
        name: "Pepero Day - South Korea",
        description:
            "Similar to Valentine's Day, people exchange Pepero sticks (a snack similar to Pocky) as tokens of affection.",
    },
    {
        date: "Wed Dec 04 2024 00:00:00 GMT+0000",
        name: "St. Barbara's Day - Georgia",
        description:
            "Known for its association with matchmaking and love spells.",
    },
];

// Return the 3 more accurate date
// Previous one
// Next one
// The one after
export function relevantDate(): IEvent[] {
    const now = Date.now();
    const totalEventLength = EVENTS.length;

    const index = EVENTS.findIndex(
        (event) => new Date(event.date).valueOf() > now
    );

    let listOfKeys: number[] = [];
    if (index === -1) {
        // Not found
        listOfKeys = [0, 1, 2];
    } else if (index === totalEventLength) {
        // Found first
        listOfKeys = [totalEventLength, 0, 1];
    } else if (index === 0) {
        // Found last
        listOfKeys = [totalEventLength - 1, totalEventLength, 0];
    } else {
        // Normal behavior
        listOfKeys = [index - 1, index, index + 1];
    }

    return returnCertainKeys<IEvent>(EVENTS, listOfKeys);
}

// Return the most accurante event
export function nextEvent(): IEvent {
    const now = Date.now();

    const index = EVENTS.findIndex(
        (event) => new Date(event.date).valueOf() > now
    );

    if (index === -1) {
        // Not found
        return EVENTS[0];
    }

    return EVENTS[index];
}

/**
 *  Format the date so we can have the same formated date everwhere
 *
 * @param date date format ( ex: Fri Jan 26 2024 00:00:00 GMT+0000 )
 * @returns Monday, May 20, 2024
 */
export function formatDate(date: string): string {
    return new Date(date).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    });
}

function returnCertainKeys<T>(arr: Array<T>, listOfKeys: number[]): Array<T> {
    return arr.filter((a, index) => listOfKeys.includes(index));
}
