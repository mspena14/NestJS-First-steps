# 🏷️ Optimización de la Funcionalidad de Microcréditos Personalizados en una Fintech con NestJS

---

### 🎯 **Objetivo del Taller:**  
Los estudiantes aprenderán a aplicar los principios SOLID en un proyecto realista de una fintech, optimizando la calidad del código y mejorando su mantenibilidad.

---

### Introducción a SOLID

**¿Qué es SOLID?**

SOLID es un acrónimo que representa cinco principios fundamentales de la programación orientada a objetos que, cuando se aplican correctamente, ayudan a crear sistemas de software más robustos, flexibles y mantenibles. Estos principios fueron introducidos por Robert C. Martin y son considerados un estándar en el desarrollo de software.

**Principios SOLID:**

1. **S**ingle Responsibility Principle (SRP) - Principio de Responsabilidad Única
2. **O**pen/Closed Principle (OCP) - Principio de Abierto/Cerrado
3. **L**iskov Substitution Principle (LSP) - Principio de Sustitución de Liskov
4. **I**nterface Segregation Principle (ISP) - Principio de Segregación de Interfaces
5. **D**ependency Inversion Principle (DIP) - Principio de Inversión de Dependencias

Estos principios buscan mejorar la estructura del código, facilitando su mantenimiento, extensión y testeo. A continuación, veremos cómo aplicar cada uno de estos principios en la implementación de una funcionalidad de microcréditos en una fintech usando NestJS, y cómo sería el código si no se aplicaran estos principios.

---

### 📜 **Historia de Usuario:**  
"Como desarrollador de una fintech, quiero implementar una mejora en la funcionalidad de microcréditos que permita a los usuarios recibir ofertas personalizadas basadas en su historial de crédito y comportamiento financiero, de modo que puedan acceder a mejores condiciones de crédito de manera eficiente."

### **Entidades Clave**
- **User:** Representa a los usuarios de la plataforma.  
  **Atributos:**
  - `id: string`
  - `name: string`
  - `creditScore: number`
  - `financialHistory: FinancialRecord[]` (array de registros financieros)
  
- **Microcredit:** Representa una solicitud de microcrédito.  
  **Atributos:**
  - `id: string`
  - `userId: string`
  - `amount: number`
  - `interestRate: number`
  - `status: string`

---

## **Desglose del Taller con Código en NestJS**

### 1. **Principio S (Single Responsibility Principle) - Principio de Responsabilidad Única**

**¿Qué es?**

El principio de responsabilidad única establece que una clase debería tener una única responsabilidad o razón para cambiar. Esto significa que cada clase debe tener una única tarea o responsabilidad dentro del sistema.

#### Sin SRP (No se debería hacer):

```typescript
@Injectable()
export class MicrocreditService {
  constructor(private readonly userRepository: UserRepository) {}

  applyForMicrocredit(userId: string, amount: number): Microcredit {
    const user = this.userRepository.findById(userId);

    // Lógica para calcular la tasa de interés
    const interestRate = this.calculateInterestRate(user);

    // Lógica para registrar el microcrédito
    const microcredit = new Microcredit(userId, amount, interestRate, 'PENDING');
    this.saveMicrocredit(microcredit);

    return microcredit;
  }

  private calculateInterestRate(user: User): number {
    // Lógica de cálculo de tasa de interés basada en el historial de crédito
    return user.creditScore > 700 ? 5 : 15;
  }

  private saveMicrocredit(microcredit: Microcredit): void {
    // Lógica para guardar el microcrédito en la base de datos
  }
}
```

Este enfoque no respeta el principio de responsabilidad única ya que la clase MicrocreditService está realizando múltiples tareas: cálculo de la tasa de interés, validación del usuario, y registro del microcrédito.

#### Con SRP (Así se debería hacer):***

```typescript
@Injectable()
export class CreditCalculationService {
  calculateInterestRate(user: User): number {
    return user.creditScore > 700 ? 5 : 15;
  }
}

@Injectable()
export class MicrocreditRegistryService {
  saveMicrocredit(microcredit: Microcredit): void {
    // Lógica para guardar el microcrédito en la base de datos
  }
}

@Injectable()
export class MicrocreditService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly creditCalculationService: CreditCalculationService,
    private readonly microcreditRegistryService: MicrocreditRegistryService
  ) {}

  applyForMicrocredit(userId: string, amount: number): Microcredit {
    const user = this.userRepository.findById(userId);
    const interestRate = this.creditCalculationService.calculateInterestRate(user);
    const microcredit = new Microcredit(userId, amount, interestRate, 'PENDING');
    this.microcreditRegistryService.saveMicrocredit(microcredit);
    return microcredit;
  }
}

```

### 2. **Principio O (Open/Closed Principle) - Principio de Abierto/Cerrado**

**¿Qué es?**

El principio de Abierto/Cerrado establece que una clase debe estar abierta a la extensión pero cerrada a la modificación. Esto significa que deberíamos poder añadir nuevas funcionalidades sin alterar el código existente.

#### Sin OCP (No se debería hacer):

```typescript
@Injectable()
export class CreditCalculationService {
  calculateInterestRate(user: User): number {
    if (user.creditScore > 700) {
      return 5;
    } else if (user.creditScore > 500) {
      return 10;
    } else {
      return 15;
    }
  }
}
```

Este código viola el principio OCP porque cada vez que necesitamos modificar la lógica de cálculo de interés, debemos alterar el código existente.

#### Con OCP (Así se debería hacer):

```typescript
interface InterestRateStrategy {
  calculate(user: User): number;
}

@Injectable()
export class StandardInterestRateStrategy implements InterestRateStrategy {
  calculate(user: User): number {
    return user.creditScore > 700 ? 5 : 15;
  }
}

@Injectable()
export class PremiumInterestRateStrategy implements InterestRateStrategy {
  calculate(user: User): number {
    return user.creditScore > 700 ? 3 : 10;
  }
}

@Injectable()
export class CreditCalculationService {
  private strategy: InterestRateStrategy;

  constructor(strategy: InterestRateStrategy) {
    this.strategy = strategy;
  }

  calculateInterestRate(user: User): number {
    return this.strategy.calculate(user);
  }
}
```

Al utilizar una estrategia de cálculo de interés, podemos añadir nuevas estrategias sin modificar el código existente, haciendo que la clase esté abierta para la extensión pero cerrada a la modificación.

### 3. Principio L (Liskov Substitution Principle) - Principio de Sustitución de Liskov

***¿Qué es?***

El principio de Sustitución de Liskov establece que los objetos de una clase base deben poder ser reemplazados por objetos de una clase derivada sin alterar la funcionalidad del programa.

#### Sin LSP (No se debería hacer):

```typescript
class BasicMicrocredit extends Microcredit {
  constructor(userId: string, amount: number) {
    super(userId, amount, 'PENDING');
  }

  // Sobrescribe un método de la clase base, pero no funciona con todas las subclases
  override apply(): void {
    // Lógica específica para microcréditos básicos
  }
}

class AdvancedMicrocredit extends Microcredit {
  constructor(userId: string, amount: number) {
    super(userId, amount, 'APPROVED');
  }

  override apply(): void {
    // Lógica específica para microcréditos avanzados
  }
}
```

Este código rompe el principio de Liskov porque las subclases modifican el comportamiento de la clase base de manera que podría no ser esperado por otras partes del código.

#### Con LSP (Así se debería hacer):

```typescript
class Microcredit {
  apply(): void {
    // Lógica genérica para aplicar un microcrédito
  }
}

class BasicMicrocredit extends Microcredit {
  // No es necesario sobrescribir el método apply si no altera el comportamiento
}

class AdvancedMicrocredit extends Microcredit {
  // Aquí podrías extender el comportamiento si es necesario, pero sin romper el contrato
}
```

Las subclases deben respetar el comportamiento de la clase base, garantizando que cualquier clase que sustituya a la clase base mantendrá el comportamiento esperado.

4\. Principio I (Interface Segregation Principle) - Principio de Segregación de Interfaces

¿Qué es?

El principio de segregación de interfaces establece que los clientes no deben estar obligados a depender de interfaces que no utilizan. Esto significa que es mejor tener varias interfaces pequeñas y específicas en lugar de una sola interfaz grande y genérica.

Sin ISP (No se debería hacer):

```typescript

interface MicrocreditService {

    applyForMicrocredit(userId: string, amount: number): Microcredit;

    calculateInterestRate(userId: string): number;

    notifyUser(userId: string, message: string): void;

    generateCreditReport(userId: string): CreditReport;
}
```

En este ejemplo, la interfaz MicrocreditService obliga a las clases que la implementan a depender de métodos que pueden no necesitar. Esto viola el principio de segregación de interfaces, ya que un servicio que solo gestiona microcréditos no debería tener que implementar la lógica de notificación o generación de informes.

Con ISP (Así se debería hacer):

```typescript

interface MicrocreditApplicationService {

    applyForMicrocredit(userId: string, amount: number): Microcredit;

    }

interface InterestRateCalculationService {

    calculateInterestRate(userId: string): number;

}

interface NotificationService {

    notifyUser(userId: string, message: string): void;

}

interface CreditReportService {

    generateCreditReport(userId: string): CreditReport;

}
```

Al dividir la interfaz en interfaces más pequeñas y específicas, las clases pueden implementar solo las interfaces que realmente necesitan, siguiendo así el principio de segregación de interfaces.

5\. Principio D (Dependency Inversion Principle) - Principio de Inversión de Dependencias

¿Qué es?

El principio de inversión de dependencias establece que los módulos de alto nivel no deberían depender de módulos de bajo nivel. Ambos deberían depender de abstracciones (interfaces o clases abstractas). Además, las abstracciones no deberían depender de detalles; los detalles (implementaciones concretas) deberían depender de abstracciones.

Sin DIP (No se debería hacer):

```typescript

@Injectable()

export class MicrocreditService {

    constructor(private readonly userRepository: UserRepository) {}

    applyForMicrocredit(userId: string, amount: number): Microcredit {

    const user = this.userRepository.findById(userId);

    // Resto del código

    }
}
```

En este ejemplo, la clase MicrocreditService depende directamente de la implementación concreta de UserRepository. Esto viola el principio de inversión de dependencias, ya que los módulos de alto nivel dependen de módulos de bajo nivel.

Con DIP (Así se debería hacer):

```typescript

interface UserRepository {

    findById(userId: string): User;

}

@Injectable()

export class MicrocreditService {

    constructor(private readonly userRepository: UserRepository) {}

    applyForMicrocredit(userId: string, amount: number): Microcredit {

    const user = this.userRepository.findById(userId);

    // Lógica para aplicar microcrédito

    }

}

@Injectable()

export class InMemoryUserRepository implements UserRepository {

private users: Map<string, User> = new Map();

findById(userId: string): User {

    return this.users.get(userId);

    }

}

@Injectable()

export class DatabaseUserRepository implements UserRepository {

    findById(userId: string): User {

    // Lógica para obtener el usuario de la base de datos

    }
}
```

Al depender de una abstracción (UserRepository), MicrocreditService no está acoplado a ninguna implementación específica de UserRepository. Esto permite cambiar la implementación concreta sin afectar a MicrocreditService, siguiendo el principio de inversión de dependencias.
