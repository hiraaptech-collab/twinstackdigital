<?php

namespace Tests\Feature;

use Tests\TestCase;

class HealthCheckTest extends TestCase
{
    /**
     * Test the /api/v1/health endpoint returns a structured JSON response.
     */
    public function test_health_check_returns_ok(): void
    {
        $response = $this->getJson('/api/v1/health');

        $response->assertStatus(200)
            ->assertJsonStructure([
                'status',
                'timestamp',
                'service',
                'version',
                'environment',
                'database' => [
                    'status',
                    'driver',
                    'database',
                ],
            ])
            ->assertJson([
                'status' => 'healthy',
                'version' => 'v1',
            ]);

        $this->assertEquals('connected', $response->json('database.status'));
        $this->assertEquals(config('database.default'), $response->json('database.driver'));
    }
}
