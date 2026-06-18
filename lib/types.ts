export type TaskKey = "t1" | "t2" | "t3" | "t4";

export interface DaySlots {
  [taskKey: string]: string;
}

export interface SlotsData {
  [dateKey: string]: DaySlots;
}

export interface AppData {
  members: string[];
  slots: SlotsData;
}

export const TASKS: { key: TaskKey; label: string; color: string; textColor: string }[] = [
  { key: "t1", label: "🐾 Juna (pes)",   color: "#D5EAD0", textColor: "#27500A" },
  { key: "t2", label: "🏠 Pomoč doma",   color: "#FFF3CD", textColor: "#633806" },
  { key: "t3", label: "🛒 Nakupi",        color: "#D0E8F5", textColor: "#0C447C" },
  { key: "t4", label: "🏥 Bolnišnica",   color: "#F5D0D0", textColor: "#791F1F" },
];

export const DEFAULT_MEMBERS = ["Matija", "Špela", "Pavel", "Štefan", "Saša", "Petra", "Zala"];

export const AVATAR_COLORS: [string, string][] = [
  ["#D0E8F5","#185FA5"], ["#D5EAD0","#3B6D11"], ["#FFF3CD","#854F0B"],
  ["#F5D0D0","#A32D2D"], ["#EEEDFE","#3C3489"], ["#E1F5EE","#085041"], ["#FAECE7","#712B13"],
];

export const DAY_NAMES = ["Pon","Tor","Sre","Čet","Pet","Sob","Ned"];
export const DAY_NAMES_LONG = ["ponedeljek","torek","sreda","četrtek","petek","sobota","nedelja"];
export const MONTH_NAMES_LONG = ["januarja","februarja","marca","aprila","maja","junija","julija","avgusta","septembra","oktobra","novembra","decembra"];
export const MONTH_NAMES_SHORT = ["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"];

export const START_DATE = new Date(2026, 5, 20);
export const WEEKS = 6;
